import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  console.log(setSearchParams);
  return (
    <div className={styles.mapContainer}>
      {lat} {lng}
    </div>
  );
}

export default Map;
