export default function ResultModal({result, targetTime}){
    return(
        <dialog>
            <h2>Your {result}</h2>
            <p>The target time was <strong>{targetTime} seconds  </strong> </p>
        </dialog>
    )
}