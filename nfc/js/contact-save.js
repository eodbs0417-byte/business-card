function saveContact(name, phone) {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:${name};;;;
FN:${name}
TEL;TYPE=CELL:${phone}
END:VCARD`;

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${name}.vcf`;
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}