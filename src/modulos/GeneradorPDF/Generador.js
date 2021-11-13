import { jsPDF } from "jspdf";

export async function generarPDF(textoAPedefear) {
    const doc = new jsPDF();
    doc.text(textoAPedefear, 10, 10);
    doc.save('informe.pdf')
}

