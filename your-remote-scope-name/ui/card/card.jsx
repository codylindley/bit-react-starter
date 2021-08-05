import React from "react";
import { Heading } from "@your-bit-dev-username/your-remote-scope-name.ui.heading";
import { Text } from "@your-bit-dev-username/your-remote-scope-name.ui.text";
import { ExternalLink } from "@teambit/design.ui.external-link";
import { CopyBox } from "@teambit/documenter.ui.copy-box";

import styles from "./card.module.scss";

export function Card({ heading, command, text, link }) {
  return (
    <div className={styles.card}>
      <ExternalLink href={link}>
        <Heading element="h3" className={styles.heading}>
          {heading}
        </Heading>
        <Text className={styles.text} text={text} />
      </ExternalLink>
      {command ? (
        <CopyBox className={styles["copy-box"]}>{command}</CopyBox>
      ) : null}
    </div>
  );
}
