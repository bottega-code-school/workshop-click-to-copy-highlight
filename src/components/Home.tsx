import * as React from "react";
import Layout from "./Layout";
import HighlightText from "./HighlightText";
import { codeSnippets } from "./codeSnippets";

export default function Home() {
  return (
    <Layout>
      <div className="post-body">
        <p>
          I've updated the starter code that we have here and as you can see we
          now have a few different components.
        </p>

        <h2>Starter HTML Code</h2>

        <HighlightText text={codeSnippets.one} />

        <h2>Scss Starter Code</h2>

        <HighlightText text={codeSnippets.two} />

        <p>
          If you look on the HTML side I've added a description, also I've added
          a sidebar div and class. And as you may have noticed it is literally
          identical to what we have right here. So something that you'll come
          across quite a bit as you're developing applications, is when you have
          identical styles or very very close to the same style that needs to be
          placed throughout an entire application and that is where we get into
          how we can leverage mixins.
        </p>

        <HighlightText
          text="It's a huge reason why SCSS has become so popular through the
          years because it lets you wrap up functionality that you use quite a
          bit and call it from anywhere in the application."
          variant="text"
        />

        <p>
          So let's look at the code we have here. So we have two components that
          are completely identical and one is in the sidebar. The other is there
          in the featured section. If you come inside of the nested feature
          class you can see we have a color of tomato and a nested subheading
          link with its own respective hover state. Now if you come down all the
          way down to the bottom you can see we have a sidebar class and inside
          of the sidebar class we're calling things such as the font family,
          text-align right float, and all of these kinds of components. So what
          we have here is identical but we do have a few things that we've added
          on. So this is going to show how mixins can be called. So what we're
          going to do is come into the featured section and I'm going to cut all
          of it out. And as you can see this will change just to the basic
          defaults. At the very top of the file, we are going to create a mixin
          and I'm going to call it featured and just leave it at that. And
          inside a set of curly braces, I'm going to paste in all of those
          styles.
        </p>
      </div>
    </Layout>
  );
}
