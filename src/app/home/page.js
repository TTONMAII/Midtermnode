import "../home.css";

const supercars = [
  { model: 'Bugatti Chiron Super Sport', topSpeedMph: 304, topSpeedKmh: 490, imageUrl: 'https://www.headlightmag.com/hlmwp/wp-content/uploads/2019/09/0506d357-bugatti-chiron-super-sport-300-2.jpg' },
  { model: 'Hennessey Venom F5', topSpeedMph: '301', topSpeedKmh: '484', imageUrl: 'https://www.headlightmag.com/hlmwp/wp-content/uploads/2023/08/Hennessey-Venom-F5-Revolution-Roadster_01.jpg' },
  { model: 'Koenigsegg Agera RS', topSpeedMph: 278, topSpeedKmh: 447, imageUrl: 'https://cdn.carbuzz.com/gallery-images/840x560/396000/900/396973.jpg' },
  { model: 'SSC Tuatara', topSpeedMph: '282', topSpeedKmh: '454', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/2019_SSC_Tuatara_at_Pebble_Beach_Press_Conference.jpg/1920px-2019_SSC_Tuatara_at_Pebble_Beach_Press_Conference.jpg' },
];
export default function Home() {
  return (
    <div className="supercarsContainer">
      <main className="mainContent">
        <h1>Supercar Speed Comparison</h1>
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Car Model</th>
                <th>Top Speed (mph)</th>
                <th>Top Speed (km/h)</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {supercars.map((car, index) => (
                <tr key={index}>
                  <td>{car.model}</td>
                  <td>{car.topSpeedMph}</td>
                  <td>{car.topSpeedKmh}</td>
                  <td>
                    <img src={car.imageUrl} alt={car.model} className="carImage" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
