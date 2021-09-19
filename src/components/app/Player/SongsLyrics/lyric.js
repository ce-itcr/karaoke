import React, { useRef, useCallback } from "react";
import { Lrc, LrcLine } from "@mebtte/react-lrc";

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
  }, []);

  return (
    <div style={style.wrapper}>
      <div >
      <Lrc
        className="lrc"
        lrc={songLyrics}
        currentTime={currentTime}
        onCurrentLineChange={onCurrentLineChange}
        style={style.lrc}
        ref={lrcRef}
        intervalOfRecoveringAutoScrollAfterUserScroll={0}
      >
        {(line, active) => (
          <LrcLine
            key={line.millisecond}
            style={{
              ...style.line,
              color: active ? "red" : "black"
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
