import React from 'react';

function renderDetails2(details) {
  const im2cLinkUrl = 'https://www.immchallenge.org/'; // Replace with the actual URL for IM2C link
  const himcLinkUrl = 'https://www.comap.com/contests/himcm-midmcm'; // Replace with the actual URL for HIMC link
  const uoeUrl =
    'https://www.topuniversities.com/universities/university-edinburgh';
  const ciUrl = 'https://www.clairfield.com/';
  const euticUrl = 'https://www.facebook.com/EUTIC/';
  const formulaUrl = 'https://www.eufs.co/';
  const rtgUrl = 'https://readytradergo.optiver.com/';
  const appUrl = 'https://apps.apple.com/pl/app/slam/id1672653906';

  const im2cRegex = /IM2C/g;
  const himcRegex = /HiMCM/g;
  const uoeRegex = /ranked/g;
  const ciRegex = /Clairefield International/g;
  const euticRegex = /EUTIC/g;
  const formulaRegex = /FORMULA/g;
  const rtgRegex = /Ready Trader Go/g;
  const appRegex = /AppStore/g;

  const renderedDetails = details
    .replace(
      im2cRegex,
      `<a href="${im2cLinkUrl}" target="_blank" rel="noopener noreferrer" style="color: rgb(234 179 8);">IM2C</a>`
    )
    .replace(
      himcRegex,
      `<a href="${himcLinkUrl}" target="_blank" rel="noopener noreferrer" style="color: rgb(234 179 8)">HiMCM</a>`
    )
    .replace(
      uoeRegex,
      `<a href="${uoeUrl}" target="_blank" rel="noopener noreferrer" style="color: rgb(234 179 8)">ranked</a>`
    )
    .replace(
      ciRegex,
      `<a href="${ciUrl}" target="_blank" rel="noopener noreferrer" style="color: rgb(234 179 8)">Clairefield International</a>`
    )
    .replace(
      euticRegex,
      `<a href="${euticUrl}" target="_blank" rel="noopener noreferrer" style="color: rgb(234 179 8)">EUTIC</a>`
    )
    .replace(
      formulaRegex,
      `<a href="${formulaUrl}" target="_blank" rel="noopener noreferrer" style="color: rgb(234 179 8)">FORMULA</a>`
    )
    .replace(
      rtgRegex,
      `<a href="${rtgUrl}" target="_blank" rel="noopener noreferrer" style="color: rgb(234 179 8)">Ready Trader Go</a>`
    )
    .replace(
      appRegex,
      `<a href="${appUrl}" target="_blank" rel="noopener noreferrer" style="color: rgb(234 179 8)">AppStore</a>`
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
