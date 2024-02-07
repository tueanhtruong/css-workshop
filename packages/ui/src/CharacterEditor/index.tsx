/* eslint-disable import/no-cycle */

/* eslint-disable import/no-named-as-default-member */
import React from "react";
import { defaultSkinColor, defaultClothesColor } from "../constants";
import { Character, MaxWidthWrapper, ControlPane } from "..";
import {
  bodyOptions,
  headOptions,
  faceOptions,
  accessoryOptions,
  skinColorOptions,
  clothesColorOptions,
} from "./helpers";
import "./characterEditor.css";

export function CharacterEditor(): JSX.Element {
  const [body, setBody] = React.useState(0);
  const [head, setHead] = React.useState(0);
  const [face, setFace] = React.useState(0);
  const [accessory, setAccessory] = React.useState(0);
  const [skinColor, setSkinColor] = React.useState(defaultSkinColor);
  const [clothesColor, setClothesColor] = React.useState(defaultClothesColor);

  return (
    <main className="characterEditor">
      <MaxWidthWrapper className="maxWidthWrapper">
        <header className="header">
          <h1 className="title">Create your Character</h1>
          <p className="description">
            Customize your character&apos;s look and style using the controls
            below. What sort of adventure will you embark on?{" "}
          </p>
        </header>
        <div className="controlColumn">
          <ControlPane
            currentOption={body}
            handleSelectOption={setBody}
            options={bodyOptions}
            title="Bodies"
          />
          <ControlPane
            currentOption={head}
            handleSelectOption={setHead}
            options={headOptions}
            title="Heads"
          />
          <ControlPane
            currentOption={face}
            handleSelectOption={setFace}
            options={faceOptions}
            title="Faces"
          />
          <ControlPane
            currentOption={accessory}
            handleSelectOption={setAccessory}
            options={accessoryOptions}
            title="Accessories"
          />
          <ControlPane
            currentOption={skinColor}
            handleSelectOption={setSkinColor}
            options={skinColorOptions}
            title="Skin Color"
          />
          <ControlPane
            currentOption={clothesColor}
            handleSelectOption={setClothesColor}
            options={clothesColorOptions}
            title="Clothing Color"
          />
        </div>
      </MaxWidthWrapper>

      <div className="characterWrapper">
        <Character
          accessory={accessory}
          body={body}
          clothesColor={clothesColor}
          face={face}
          head={head}
          skinColor={skinColor}
        />
      </div>
    </main>
  );
}
