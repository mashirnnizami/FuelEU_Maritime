export default function RoutesTab({ routes }: any) {
  return (
    <table>
      <thead>
        <tr><th>ID</th><th>GHG</th></tr>
      </thead>
      <tbody>
        {routes.map((r:any)=>(
          <tr key={r.routeId}>
            <td>{r.routeId}</td>
            <td>{r.ghgIntensity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
