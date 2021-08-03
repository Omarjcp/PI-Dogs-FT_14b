import { Link, useHistory } from "react-router-dom";

export const Barra = ({ DivCont }) => {
  const history = useHistory();

  let regresar = () => {
    history.push("/principal");
  };

  return (
    <DivCont>
      <div style={{ marginTop: "2rem" }}>
        <p onClick={regresar} style={{ marginLeft: "1rem", cursor: "grab" }}>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 0C12.4913 0 8.1673 1.79107 4.97919 4.97919C1.79107 8.1673 0 12.4913 0 17C0 21.5087 1.79107 25.8327 4.97919 29.0208C8.1673 32.2089 12.4913 34 17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17C34 12.4913 32.2089 8.1673 29.0208 4.97919C25.8327 1.79107 21.5087 0 17 0V0ZM24.4375 15.9375C24.7193 15.9375 24.9895 16.0494 25.1888 16.2487C25.3881 16.448 25.5 16.7182 25.5 17C25.5 17.2818 25.3881 17.552 25.1888 17.7513C24.9895 17.9506 24.7193 18.0625 24.4375 18.0625H12.1274L16.6898 22.6227C16.7885 22.7215 16.8669 22.8388 16.9204 22.9679C16.9738 23.097 17.0013 23.2353 17.0013 23.375C17.0013 23.5147 16.9738 23.653 16.9204 23.7821C16.8669 23.9112 16.7885 24.0285 16.6898 24.1273C16.591 24.226 16.4737 24.3044 16.3446 24.3579C16.2155 24.4113 16.0772 24.4388 15.9375 24.4388C15.7978 24.4388 15.6595 24.4113 15.5304 24.3579C15.4013 24.3044 15.284 24.226 15.1852 24.1273L8.81025 17.7523C8.7113 17.6536 8.6328 17.5363 8.57924 17.4072C8.52567 17.2781 8.4981 17.1398 8.4981 17C8.4981 16.8602 8.52567 16.7219 8.57924 16.5928C8.6328 16.4637 8.7113 16.3464 8.81025 16.2477L15.1852 9.87275C15.3848 9.67324 15.6554 9.56116 15.9375 9.56116C16.2196 9.56116 16.4902 9.67324 16.6898 9.87275C16.8893 10.0723 17.0013 10.3429 17.0013 10.625C17.0013 10.9071 16.8893 11.1777 16.6898 11.3773L12.1274 15.9375H24.4375Z"
              fill="#9681ff"
            />
          </svg>
        </p>
      </div>
    </DivCont>
  );
};
