import React from 'react';

function renderDetails2(details) {
  const mongoDBUrl = 'https://www.mongodb.com/';
  const expressUrl = 'https://expressjs.com/';
  const reactUrl = 'https://react.dev/learn';
  const NodeUrl = 'https://www.clairfield.com/';
  const tensorUrl = 'https://www.tensorflow.org/';
  const pytorchUrl = 'https://pytorch.org/';
  const googleUrl = 'https://careers.google.com/';
  const treehacksUrl = 'https://www.treehacks.com/';

  const mongoDB = /MongoDB/g;
  const expressJS = /Express.js/g;
  const React = /React/g;
  const NodeJS = /Node.js/g;
  const tensorFlow = /TensorFlow/g;
  const pytorch = /PyTorch/g;
  const google = /Google/g;
  const treehacks = /TreeHacks/g;

  const renderedDetails = details
    .replace(
      mongoDB,
      `<a href="${mongoDBUrl}" target="_blank" rel="noopener noreferrer" style="color: rgb(234 179 8);">MondoDB</a>`
    )
    .replace(
      expressJS,
      `<a href="${expressUrl}" target="_blank" rel="noopener noreferrer" style="color: rgb(234 179 8)">Express.js</a>`
    )
    .replace(
      React,
      `<a href="${reactUrl}" target="_blank" rel="noopener noreferrer" style="color: rgb(234 179 8)">React.js</a>`
    )
    .replace(
      NodeJS,
      `<a href="${NodeUrl}" target="_blank" rel="noopener noreferrer" style="color: rgb(234 179 8)">Node.js</a>`
    )
    .replace(
      tensorFlow,
      `<a href="${tensorUrl}" target="_blank" rel="noopener noreferrer" style="color: rgb(234 179 8)">TensorFlow</a>`
    )
    .replace(
      pytorch,
      `<a href="${pytorchUrl}" target="_blank" rel="noopener noreferrer" style="color: rgb(234 179 8)">PyTorch</a>`
    )
    .replace(
      google,
      `<a href="${googleUrl}" target="_blank" rel="noopener noreferrer" style="color: rgb(234 179 8)">Google</a>`
    )
    .replace(
      treehacks,
      `<a href="${treehacksUrl}" target="_blank" rel="noopener noreferrer" style="color: rgb(234 179 8)">TreeHacks</a>`
    );

  return (
    <p
      className="text-base font-normal text-stone-500 dark:text-stone-400"
      dangerouslySetInnerHTML={{ __html: renderedDetails }}
    />
  );
}

function TimelineItem({ year, title, duration, details }) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
            {duration}
          </div>
        </p>
        <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
          {renderDetails2(details)}
          {/* {details} */}
        </p>
      </li>
    </ol>
  );
}

export default TimelineItem;
