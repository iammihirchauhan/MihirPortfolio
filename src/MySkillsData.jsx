export const MySkillsData = ({ src, skills }) => {
  return (
    <span>
      <img src={src} alt="icon" />
      <p>{skills}</p>
    </span>
  );
};
