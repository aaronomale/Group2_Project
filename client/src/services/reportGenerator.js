import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = (inventoryData, selectedCategory) => {
  const doc = new jsPDF();

  const tableColumn = ["#", "Name", "Description", "Quantity", "Price", "Category"];
  const tableRows = [];

  inventoryData.forEach((item, index) => {
    const rowData = [
      index+1,
      item.name || "-",
      item.description || "-",
      item.quantity || "-",
      "$"+item.listPrice || "-", // Use dash if price is not available
      item.category || "-"
    ];
    tableRows.push(rowData);
  });

  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  
  const dateStr = new Date().toISOString().split("T")[0]; // Get today's date in yyyy-MM-dd format
  doc.text(`Inventory Report for ${selectedCategory}`, 14, 15);
  doc.save(`inventory_report_${dateStr}.pdf`);
};

export default generatePDF;
