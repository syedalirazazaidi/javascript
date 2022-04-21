import React, { useEffect } from "react";

const Lifecycle = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      document.title = `Time is: ${new Date()}`;
    }, 1000);
    // COMPONENT WILL UNMOUNT
    return () => {
      document.title = "Time stopped.";
      clearInterval(intervalId);
    };
  }, []);

  return <h1>What time is it?</h1>;
};
export default Lifecycle;

// class Lifecycle extends React.Component {
//   componentDidUpdate() {
//     console.log("Behavior before the component is added to the DOM");
//   }
//   render() {
//     console.log("ki life");
//     return <div>Life</div>;
//   }
// }

// export default Lifecycle;
// import React, { useEffect } from "react";
// const Lifecycle = () => {
//   useEffect(() => {
//     console.log("Behavior before the component is added to the DOM");
//   }, []); // Mark [] here.
//   return <h1>Hello World</h1>;
// };
// export default Lifecycle;
