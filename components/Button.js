const Button = ({onClickButton, children})=> (
    <>
        <button onClick={onClickButton}>{children}</button>
    </>
)

export default Button