import React from 'react';
import dark from "../../themes/dark"

 
class App extends React.Component {	
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: "Modalidades de Ingresso"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{y: 34, label: "AC" },
					{y: 33, label: "EP" },
					{y: 33, label: "PPI"}
				]
			}]
		}
		
		return (
		<div>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
 
export default App;