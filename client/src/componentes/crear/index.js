import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validaciones/validaciones";
import { useDispatch, useSelector } from "react-redux";

import { Barra } from "./barra/index";
import { DivCont } from "./barra/styled";
import {
  DivContainer,
  DivInput,
  InputMin,
  InputMax,
  SpanError,
  DivInputMinMax,
  InputN,
  InputSubmit,
  InputImg,
} from "./styled";
import { crearRaza, obtenerTemperamentos } from "../../redux/actions";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const NuevaRaza = () => {
  const dispatch = useDispatch();
  let { temperamentos, msg } = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    dispatch(obtenerTemperamentos());
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(crearRaza(data));
  };

  useEffect(() => {
    if (msg) {
      alert(msg);
      history.go(0);
    }
  }, [msg]);

  return (
    <>
      <Barra DivCont={DivCont} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#A5AAFF",
        }}
      >
        <DivContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DivInput>
              <label htmlFor="nombre">Nombre</label>
              <InputN
                name="nombre"
                id="nombre"
                placeholder="nombre de raza"
                {...register("nombre")}
              />
              <SpanError>{errors.nombre && errors.nombre.message}</SpanError>
            </DivInput>
            <hr />
            <DivInput>
              <label htmlFor="alturaMin">Altura</label>
              <DivInputMinMax>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>min</span>
                  <InputMin
                    name="alturaMin"
                    id="alturaMin"
                    placeholder="min cm"
                    {...register("alturaMin")}
                  />
                  <SpanError>
                    {errors.alturaMin && errors.alturaMin.message}
                  </SpanError>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>max</span>
                  <InputMax
                    name="alturaMax"
                    placeholder="max cm"
                    {...register("alturaMax")}
                  />
                  <SpanError>
                    {errors.alturaMax && errors.alturaMax.message}
                  </SpanError>
                </div>
              </DivInputMinMax>
            </DivInput>
            <hr />

            <DivInput>
              <label htmlFor="pesoMin">Peso</label>
              <DivInputMinMax>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>min</span>
                  <InputMin
                    name="pesoMin"
                    id="pesoMin"
                    placeholder="min Kg"
                    {...register("pesoMin")}
                  />
                  <SpanError>
                    {errors.pesoMin && errors.pesoMin.message}
                  </SpanError>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>max</span>
                  <InputMax
                    name="pesoMax"
                    placeholder="max Kg"
                    {...register("pesoMax")}
                  />
                  <SpanError>
                    {errors.pesoMax && errors.pesoMax.message}
                  </SpanError>
                </div>
              </DivInputMinMax>
            </DivInput>

            <hr />

            <DivInput>
              <label htmlFor="años">Años de vida</label>
              <DivInputMinMax>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>min</span>
                  <InputMin
                    name="añosMin"
                    id="años"
                    placeholder="min años"
                    {...register("añosMin")}
                  />
                  <SpanError>
                    {errors.añosMin && errors.añosMin.message}
                  </SpanError>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>max</span>
                  <InputMax
                    name="añosMax"
                    placeholder="max años"
                    {...register("añosMax")}
                  />
                  <SpanError>
                    {errors.añosMax && errors.añosMax.message}
                  </SpanError>
                </div>
              </DivInputMinMax>
            </DivInput>

            <DivInput>
              <label htmlFor="url">Imagen</label>
              <DivInputMinMax>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <InputImg
                    name="url"
                    id="url"
                    placeholder="url imagen"
                    {...register("url")}
                  />
                  <SpanError>{errors.url && errors.url.message}</SpanError>
                </div>
              </DivInputMinMax>
            </DivInput>

            <hr />

            <DivInput>
              <label htmlFor="temp">Temperamentos</label>
              <span style={{ fontSize: ".8rem" }}>
                <br />
                <i>
                  para seleccionar multiples temperamentos, debes presionar
                  <br />
                  la tecla ctrl junto con un click
                </i>
              </span>
              <select
                name="temperamentos[]"
                id="temp"
                multiple
                {...register("temperamentos[]")}
              >
                <option disabled hidden>
                  Elige el/los temperamentos
                </option>
                {temperamentos.map((temperamento) => {
                  return (
                    <option key={temperamento.id} value={temperamento.id}>
                      {temperamento.name}
                    </option>
                  );
                })}
              </select>
              <SpanError>
                {errors.temperamentos && errors.temperamentos.message}
              </SpanError>
            </DivInput>

            <hr />

            <DivInput>
              <InputSubmit type="submit" />
            </DivInput>
          </form>
        </DivContainer>
      </div>
    </>
  );
};
