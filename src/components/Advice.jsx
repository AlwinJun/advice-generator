const Advice = ({ id, body }) => {
  return (
    <>
      <h4 className="mb-4 text-sm tracking-widest text-neon">Advice #{id}</h4>
      <p className="mb-6 text-primary font-extrabold leading-snug text-cyan">
        {body}
      </p>
    </>
  );
};

export default Advice;
