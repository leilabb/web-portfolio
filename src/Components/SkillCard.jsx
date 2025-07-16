export default function SkillCard({ name, meta }) {
  return (
    <div className="bg-card rounded-lg p-2 hover:bg-gray-600 transition-colors duration-200">
      <h3 className="text-white text-center font-medium text-lg">{name}</h3>
      {meta != null && (
        <p className="text-gray-400 text-sm text-center mt-1 capitalize">
          {meta}
        </p>
      )}
    </div>
  );
}
