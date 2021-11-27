import React, { useRef, useCallback } from "react";
import { Lrc, LrcLine } from "@mebtte/react-lrc";
import { animateScroll as scroll} from 'react-scroll';


const style = {
  wrapper: {
    /*flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: 'hidden !important'*/
  },
  lrc: {
    flex: 1,
    padding: 20
  },
  line: {
    textAlign: "center",
    padding: 10,
    fontSize: 18
  }
};

const LyricsPlayer = ({ songLyrics, currentTime, songName, songAuthor }) => {
  const lrcRef = useRef();


  const onCurrentLineChange = useCallback((lrcLine, index) => {
    //console.log("\n");
    //console.log(lrcLine, index);
    //scroll.scrollMore(41);
  }, []);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-spotify-grey border-0 mt-6 localBar">
      <div className="rounded-t bg-spotify-grey mb-0 px-6 py-6">
      <div className="text-center flex justify-between">
          <h6 className="text-white text-xl font-bold">{songName} | {songAuthor}</h6>
      </div>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0" style={{ height:'550px', display: 'flex', flexDirection: 'column', }}>

        <Lrc
          className="lrc"
          lrc={songLyrics}
          currentTime={currentTime }
          autoScroll={true}
          intervalOfRecoveringAutoScrollAfterUserScroll={0}
          onCurrentLineChange= {onCurrentLineChange}
          style={{ overflow: 'hidden !important',  }}
          ref={lrcRef}
        >
          {(line, active) => (
            <LrcLine
              key={line.millisecond}
              style={{
                ...style.line,
                textAlign: 'center',
                padding: '10px 0',
                color: active ? '#1db954' : '#383838',
                transform: `scale(${active ? 1.2 : 1})`,
                transition: 'transform 300ms'
              }}
            >
              {line.content}
            </LrcLine>
          )}
        </Lrc>
   

      </div>
    </div>
    
  );
};

export default LyricsPlayer;
