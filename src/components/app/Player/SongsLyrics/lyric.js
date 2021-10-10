import React, { useRef, useCallback } from "react";
import { Lrc, LrcLine } from "@mebtte/react-lrc";
import { animateScroll as scroll} from 'react-scroll';


const style = {
  wrapper: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: 'hidden !important'
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

const Wrapper = ({ songLyrics, currentTime }) => {
  const lrcRef = useRef();


  const onCurrentLineChange = useCallback((lrcLine, index) => {
    console.log("\n");
    console.log(lrcLine, index);
    scroll.scrollMore(41);
  }, []);



  return (
    <div style={style.wrapper}>
      <div >
      <Lrc
        className="lrc"
        lrc={songLyrics}
        currentTime={currentTime }
        onCurrentLineChange= {onCurrentLineChange}
        style={{ overflow: 'hidden !important' }}
        ref={lrcRef}
      >
        {(line, active) => (
          <LrcLine
            key={line.millisecond}
            style={{
              ...style.line,
              textAlign: 'center',
              padding: '10px 0',
              color: active ? 'red' : 'black',
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

export default Wrapper;
