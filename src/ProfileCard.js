// Advance Destructuring
function ProfileCard({ title, handle, image }) {
  // const title = props.title
  // const handle = props.handle

  // Destructuring
  // const { title, handle } = props;

  return (
    <div>
      <img src={image} alt={title} />
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
