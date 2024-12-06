import React from "react";
import { useLoaderData } from "react-router-dom";
import Equipment from "../components/Equipment";

const AllEquipment = () => {
  const equipments = useLoaderData();

  return (
    <div>
      <div>
        <h1>Comprehensive Sports Equipment for Every Athlete</h1>
        <p>
          At our sports equipment store, we offer a wide range of high-quality
          gear to meet the needs of athletes at all levels. Whether you're into
          team sports, individual fitness, or outdoor adventures, we have
          everything you need to perform your best.
        </p>
      </div>
      <div>
        {equipments.map((equipment) => (
          <Equipment key={equipment._id} equipment={equipment}></Equipment>
        ))}
      </div>
    </div>
  );
};

export default AllEquipment;
