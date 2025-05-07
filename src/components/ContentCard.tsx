const ContentCard = ({ title, description }: { title: string; description: string }) => {
    return (
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default ContentCard;