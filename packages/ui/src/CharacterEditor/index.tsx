/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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
import styles from "./characterEditor.module.css";

export function CharacterEditor(): JSX.Element {
  const [body, setBody] = React.useState(0);
  const [head, setHead] = React.useState(0);
  const [face, setFace] = React.useState(0);
  const [accessory, setAccessory] = React.useState(0);
  const [skinColor, setSkinColor] = React.useState(defaultSkinColor);
  const [clothesColor, setClothesColor] = React.useState(defaultClothesColor);

  return (
    <main className={styles.characterEditor}>
      <MaxWidthWrapper className={styles.maxWidthWrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>Create your Character</h1>
          <p className={styles.description}>
            Customize your character&apos;s look and style using the controls
            below. What sort of adventure will you embark on?{" "}
          </p>
        </header>
        <div className={styles.controlColumn}>
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

      <div className={styles.characterWrapper}>
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
