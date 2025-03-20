import React, { useState } from "react";
import "./PlantNet.css";

const PlantNet = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [plantInfo, setPlantInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleIdentifyPlant = async () => {
    if (!image) {
      alert("Please upload an image first!");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:5000/api/planet/identify", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.plant) {
        const species = data.plant.species;
        setPlantInfo({
          commonName: species.common_names.length > 0 ? species.common_names[0] : "Unknown",
          scientificName: species.scientific_name,
          family: species.family,
        });
      } else {
        setPlantInfo(null);
        alert("No matching plant found. Try a different image.");
      }
    } catch (error) {
      console.error("Error identifying plant:", error);
      alert("Failed to identify plant.");
    }

    setLoading(false);
  };

  return (
    <div className="plant-container">
      <h1>Identify Your Plant</h1>

      <input type="file" accept="image/*" onChange={handleImageChange} />

      {preview && <img src={preview} alt="Uploaded Preview" className="plant-preview" />}

      <button onClick={handleIdentifyPlant} disabled={loading} className="identify-btn">
        {loading ? "Identifying..." : "Identify Plant"}
      </button>

      {plantInfo && (
        <div className="plant-info">
          <h3>Plant Details:</h3>
          <p><strong>Common Name:</strong> {plantInfo.commonName}</p>
          <p><strong>Scientific Name:</strong> {plantInfo.scientificName}</p>
          <p><strong>Family:</strong> {plantInfo.family}</p>
        </div>
      )}
    </div>
  );
};

export default PlantNet;
