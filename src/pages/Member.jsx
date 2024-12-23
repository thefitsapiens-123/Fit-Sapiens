import React from "react";
import UploadFIle from "../components/UploadFIle";
import healthQustion from "../../public/questions";
import { Link } from "react-router";

function Member() {
  return (
    <>
      <div className="flex max-w-max gap-4">
        <div className="bg-white rounded-xl shadow p-4 sm:p-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthQustion.map((input) => (
              <div className="col-span-1 md:col-span-2" key={input.id}>
                <p>{input.id}</p>
              </div>
            ))}
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            ullam perspiciatis amet aperiam dolor aspernatur, consectetur illo.
            Molestiae modi laboriosam sed laudantium enim. Sunt, necessitatibus,
            labore odio ratione recusandae dignissimos officiis nulla quo dolor
            temporibus at placeat quidem fugiat est a incidunt natus, illo
            similique? Labore ut nulla ad nihil debitis quod eum eaque incidunt,
            doloremque libero eligendi quae maiores tempore mollitia consectetur
            fugiat voluptatum minus? Neque odit laudantium labore unde eveniet
            adipisci, explicabo voluptate quisquam quia ut blanditiis delectus
            quos voluptatum possimus fugiat porro consequatur facilis iste
            molestias quae, fuga cum, ratione officia aspernatur! Perspiciatis,
            hic. Velit ullam, reprehenderit ea voluptatibus ut quibusdam dolores
            aperiam omnis nihil quam eos natus vitae necessitatibus facere
            similique dolorem beatae dicta? Fugiat commodi aperiam ducimus iusto
            soluta tempora illum excepturi nemo harum autem qui officiis omnis,
            pariatur necessitatibus, impedit officia eum assumenda debitis
            suscipit modi, corporis cum. Voluptate ratione quas nihil quibusdam?
            In.
          </p>
        </div>
        <UploadFIle />
      </div>
    </>
  );
}

export default Member;
