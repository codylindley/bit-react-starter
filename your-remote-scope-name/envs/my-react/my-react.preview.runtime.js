import { PreviewRuntime } from "@teambit/preview";
import { ReactAspect } from "@teambit/react";
import { ThemeCompositions } from "@teambit/documenter.theme.theme-compositions";
import { Theme } from "@teambit/react.templates.themes.theme";
import { MyReactAspect } from "./my-react.aspect";

export class MyReactPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]) {
    const myReactPreviewMain = new MyReactPreviewMain();
    // register a new provider to wrap all compositions in the react environment with a custom theme.
    react.registerProvider([ThemeCompositions, Theme]);

    return myReactPreviewMain;
  }
}

MyReactAspect.addRuntime(MyReactPreviewMain);
