import React from 'react';
import leads from './DownloadMarkettingLeads.module.css';
import config from '../../services/config';
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import Footer2 from "../../components/Footer/Footer2";

const DownloadMarkettingLeads = () => {
  const handleDownload = async () => {

    // "http://localhost:3000/download-leads"
    // `${config.apiUrl}/download-leads`

    try {
      const response = await fetch(`${config.apiUrl}/download-leads`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        },
      });


      if (!response.ok) {
        throw new Error('Failed to download leads');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'leads.xlsx'); // Specify the file name
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link); // Clean up the element
    } catch (error) {
      console.error('Error downloading leads:', error);
    }
  };

  return (
    <>
    <Newnavbar />
    <div className={leads.container}>
      <button className={leads.dbutton} onClick={handleDownload}>
        Download Marketting Leads
      </button>

      
    </div>

    {/* footer */}
    <Footer2 />
    </>
  );
};

export default DownloadMarkettingLeads;