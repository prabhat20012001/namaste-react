// const heading=React.createElement("h1" ,{id:"heading"},"Hello world react...! ")
//     const root=ReactDOM.createRoot(document.getElementById("root"))
//     root.render(heading)
// ////// MAKING html//////
// {/* <div id="parent">
//     <div id="child">
//         <h1>i am h1 tag</h1>
//     </div>
// </div> */}
// const parent =React.createElement("div" ,{id:"parent"},React.createElement("div" ,{id:"child"},React.createElement("h1" ,{},"i am an h1 tag"))
// );
// console.log(parent)
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent)
// ////// MAKING SIBLINGS //////
// {/* <div id="parent">
//     <div id="child">
//         <h1>i am h1 tag</h1>
// <h2>i am h2 tag</h2>
//     </div>
// </div> */}
// const parent =React.createElement("div" ,{id:"parent"},React.createElement("div" ,{id:"child"},[React.createElement("h1" ,{},"i am an h1 tag"),React.createElement("h2" ,{},"i am an h2 tag"),])
// );
// console.log(parent)
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent)
// {/* <div id="parent">
//     <div id="child">
//         <h1>i am h1 tag</h1>
// <h2>i am h2 tag</h2>
//     </div>
// </div> */}
// 
//     <div id="child2">
//         <h1>i am h1 tag</h1>
// <h2>i am h2 tag</h2>
//     </div>
//  
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "i am an h1 tag"),
        React.createElement("h2", {}, "i am an h2 tag")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "i am an h1 tag"),
        React.createElement("h2", {}, "i am an h2 tag")
    ])
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=hello_world_in_react.7c0ccee6.js.map
