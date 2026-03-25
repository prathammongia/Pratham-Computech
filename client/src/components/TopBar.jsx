const TopBar = () => {
  return (
    <div className="bg-orange-600 text-white px-8 py-2 flex justify-between items-center text-sm">

      <div className="flex gap-6">
        <span>📞 +91-9811442718</span>
        <span>🕒 Mon-Sat: 9:00-18:00</span>
        <span>✉️ ashok.mongia@prathamcomputer.com</span>
      </div>

      <button className="bg-orange-500 hover:bg-orange-700 px-4 py-2 font-semibold">
        GET A QUOTE
      </button>

    </div>
  );
};

export default TopBar;