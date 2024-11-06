"use client";

import Carrousel from "@/components/ui/Carrousel";
import MainTemplate from "@/components/page/MainTemplate";
import { Switch } from "@nextui-org/react";
import { useState } from "react";
import InputForm from "@/components/forms/InputForm";

const MainCarrousel = () => {
  const [animate, setAnimate] = useState(true);
  const [clickeable, setClickeable] = useState(true);
  const [time, setTime] = useState(4);
  const [defaultItem, setDefaultItem] = useState(0);

  return (
    <MainTemplate
      name="Carrousel"
      properties={[
        "drag?: boolean;",
        "images: string[];",
        "clickeable?: boolean;",
        "defaultItem?: number;",
        "animate?: { show: boolean; time?: number };",
        "  buttons?: {\n" +
          "    show: boolean;\n" +
          '    position?: "bottom" | "side";\n' +
          "  };",
      ]}
    >
      <Carrousel
        clickeable={clickeable}
        defaultItem={defaultItem}
        animate={{ show: animate, time: time }}
        buttons={{ position: "side", show: true }}
        images={[
          "/a(1).png",
          "/a(2).png",
          "/a(3).png",
          "/a(4).png",
          "/a(5).png",
          "/a(6).png",
          "/a(7).png",
          "/a(8).png",
          "/a(9).png",
          "/a(10).png",
        ]}
      />
      <div className="flex flex-col gap-4">
        {" "}
        <InputForm
          type="number"
          name="duración"
          label={{ required: false }}
          description="(segundos)"
          onChange={({ value }) =>
            value ? setTime(Number(value)) : setTime(4)
          }
        />
        <div className="flex justify-between items-center w-auto mx-auto gap-4">
          <Switch
            isSelected={animate}
            onValueChange={setAnimate}
            classNames={{ thumb: "bg-default-white", wrapper: "bg-default" }}
          >
            Animate
          </Switch>
          <Switch
            isSelected={clickeable}
            onValueChange={setClickeable}
            classNames={{ thumb: "bg-default-white", wrapper: "bg-default" }}
          >
            Clickeable
          </Switch>
        </div>
      </div>
    </MainTemplate>
  );
};
export default MainCarrousel;
