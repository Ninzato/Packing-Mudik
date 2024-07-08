export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Ayo mulai tambahkan barang ke dalam daftar barang bawaanmu! 🚀</em>
      </footer>
    );

  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPacked / items.length) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "Semua sudah masuk koper! Siap berangkat! ✈️"
          : `💼 Kamu bawa ${items.length} barang dan kamu sudah memasukkan
          ${numPacked} (${numPacked ? packedPercentage : 0}%) ke dalam koper`}
      </em>
    </footer>
  );
}
