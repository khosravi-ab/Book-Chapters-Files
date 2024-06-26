export default function Buttons({
  checked,
  nextQuestion,
  activeQuestion,
  questions,
}) {
  return checked ? (
    <button className="btn" onClick={nextQuestion}>
      {activeQuestion === questions.length - 1 ? "پایان" : "بعدی"}
    </button>
  ) : (
    <button className="btn-disabled" onClick={nextQuestion} disabled>
      {activeQuestion === questions.length - 1 ? "پایان" : "بعدی"}
    </button>
  );
}
