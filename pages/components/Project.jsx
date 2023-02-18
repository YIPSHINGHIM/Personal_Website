function Project({ Name, Details, Tools = [] }) {
  const ToolsIUsed = Tools.map((item) => item);

  return (
    <div className="text-center shadow-lg p-10 w-85 rounded-xl dark:bg-gray-700">
      <h3 className="text-lg font-medium pt-8 pb-2  ">{Name}</h3>
      <p className="py-2 flex">{Details}</p>
      <h4 className="py-4 text-teal-600">Tools I Use</h4>
      <div className="ToolIUsed p-2 text-6xl flex flex-wrap justify-center ">
        {ToolsIUsed}
      </div>
    </div>
  );
}

export default Project;
