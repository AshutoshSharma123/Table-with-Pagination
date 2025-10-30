
import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function PaginatorBasicDemo() {
  // Step 1: Define your static (hardcoded) data
  const [customers, setCustomers] = useState([
    {
      title: "The Starry Night",
      place: "Netherlands",
      artist: "Vincent van Gogh",
      startDate: "1889",
      endDate: "1889",
    },
    {
      title: "Mona Lisa",
      place: "Italy",
      artist: "Leonardo da Vinci",
      startDate: "1503",
      endDate: "1506",
    },
    {
      title: "The Persistence of Memory",
      place: "Spain",
      artist: "Salvador Dalí",
      startDate: "1931",
      endDate: "1931",
    },
    {
      title: "Girl with a Pearl Earring",
      place: "Netherlands",
      artist: "Johannes Vermeer",
      startDate: "1665",
      endDate: "1665",
    },
    {
      title: "The Scream",
      place: "Norway",
      artist: "Edvard Munch",
      startDate: "1893",
      endDate: "1893",
    },
     {
      title: "The Persistence of Memory",
      place: "Spain",
      artist: "Salvador Dalí",
      startDate: "1931",
      endDate: "1931",
    },
    {
      title: "Girl with a Pearl Earring",
      place: "Netherlands",
      artist: "Johannes Vermeer",
      startDate: "1665",
      endDate: "1665",
    },
    {
      title: "The Scream",
      place: "Norway",
      artist: "Edvard Munch",
      startDate: "1893",
      endDate: "1893",
    },
  ]);

  return (
    <div className="card w-full flex justify-center items-center mt-10 p-10">
      <DataTable
        value={customers}
        paginator
        rows={10}
      
        className="w-11/12"
       
        stripedRows
        showGridlines
      >
        <Column field="title" header="Title" style={{ width: "20%" }} />
        <Column field="place" header="Place of Origin" style={{ width: "20%" }} />
        <Column field="artist" header="Artist" style={{ width: "20%" }} />
        <Column field="startDate" header="Start Date" style={{ width: "20%" }} />
        <Column field="endDate" header="End Date" style={{ width: "20%" }} />
      </DataTable>
    </div>
  );
}

        