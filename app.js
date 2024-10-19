function generatePdf(){
    const element = document.getElementById("resume")
    html2pdf().from(element).set({
        margin: 1,
        filename: 'test.pdf',
        html2canvas: { scale: 2 },
        jsPDF: {orientation: 'portrait', unit: 'in', format: 'letter'}
      }).save();
}
