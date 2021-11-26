import React, { useEffect, useState } from "react";
import { Chart } from "chart.js";
import { ProfileClient } from "../../../clients/ProfileClient";
import toast, { Toaster } from "react-hot-toast";

export default function CardLineChart() {

  const [songsNames, setSongsNames] = useState([]);
  const [currentSong, setCurrentSong] = useState('');
  const [currentSongStats, setCurrentSongStats] = useState('');
  const [labels, setLabels] = useState();

  let profileClient = new ProfileClient();

  useEffect(() => {
    getSongsNames();
  }, [])

  const getSongsNames = async() => {
    const response = await profileClient.getUserData(localStorage.getItem('currentUsername'));
    var currentSongsNames = [];
    for(var k in response.data.playedSongs){
      currentSongsNames.push(response.data.playedSongs[k][0]);
    }
    setSongsNames(currentSongsNames);
  }

  const handleInputSong = async(e) => { var value = e.target.value; setCurrentSong(value);}

  const searchSongData = async() => {
    if(currentSong === 'option' || currentSong === ''){
      toast.error('Debe seleccionar alguna opción.')
    } else {
      const response = await profileClient.getUserData(localStorage.getItem('currentUsername'));
      setCurrentSongStats(response.data.playedSongs[0][6]);
      //console.log(response.data.playedSongs.findIndex(song => song === currentSong))
      for(var k in response.data.playedSongs){
        if(response.data.playedSongs[k].indexOf(currentSong) !== -1){
          setCurrentSongStats(response.data.playedSongs[k][6])
          var currentLabels = [];
          var counter = 0;
          while (counter < response.data.playedSongs[k][6].length){
            currentLabels.push(counter);
            counter ++;
          }
          //console.log(currentLabels)
          setLabels(currentLabels);
        }
      }
    }
  }

  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        /*labels: [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],*/
        labels: labels,
        datasets: [
          {
            //label: new Date().getFullYear(),
            label: "Puntaje",
            backgroundColor: "#1db954",
            borderColor: "#1db954",
            data: currentSongStats,
            //data: [12, 45, 56, 0, 15],
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, );

  return (
    <>
      <Toaster/>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-spotify-grey">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">

          <div className="w-full lg:w-3/12 ">
            <div className="relative w-full mb-3">
              <h6 className="text-white text-xl font-bold">Puntaje vs Reproducción</h6>
          </div>
        </div>
        <div className="w-full lg:w-3/12 ">
          <div className="relative w-full mb-3">
                  <select 
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-spotify-grey-2 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={handleInputSong}
                    >
                        <option value="option">Seleccione una opción</option>
                        {songsNames.map(data =>
                            <option value={data}>{data}</option>
                        )};
                        </select>
                </div>
            </div>
            <div className="w-full lg:w-3/12" style={{paddingLeft:'20px'}}>
            <div className="relative w-full mb-3">
                <button 
                  className="r sm:ml-1 text-white font-bold px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 bg-spotify-green active:bg-spotify-dark-green uppercase text-sm shadow hover:shadow-lg"
                  type="button"
                  onClick={searchSongData}
                >
                    <a>
                        <i class="fas fa-search"></i> Buscar 
                    </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
