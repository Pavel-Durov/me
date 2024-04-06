import { ChangeEvent, useRef, useState } from 'react';
import domToImage from 'dom-to-image';
import figlet from 'figlet';
import './TitleGenerator.css';
import { Fonts } from './fonts';
import { logger } from 'common/logger';

const Colors = [
  '#D14',
  '#fe54fe',
  '#00aaaa',
  '#fefe54',
  '#1e347b',
  '#000084',
  '#008400',
  '#840000',
  '#848400',
  '#840084',
  '#008484',
  '#848484',
  '#000000',
  '#ffffff'
];

export function TitleGenerator(): JSX.Element {
  const [text, setText] = useState('DEMO');
  const [asciiText, setAsciiText] = useState('');
  const componentRef = useRef(null);
  const [screenshot, setScreenshot] = useState('');
  const [selectedFont, setSelectedFont] = useState('Electronic');
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(Colors[0]);
  const [selectedTextColor, setSelectedTextColor] = useState(Colors[1]);

  async function render(renderText?: string) {
    if (renderText) {
      await renderAscii(selectedFont as figlet.Fonts, renderText);
    } else {
      await renderAscii(selectedFont as figlet.Fonts, text);
    }
  }

  async function renderAscii(font: figlet.Fonts, content: string) {
    const { default: fontFile } = await import(`figlet/importable-fonts/${font}.js`);
    figlet.parseFont(font, fontFile);
    try {
      await new Promise((resolve, reject) => {
        figlet.text(content, { font }, async (error: Error | null, result?: string) => {
          if (error) {
            reject(error);
          } else {
            setAsciiText(result as string);
            await updateScreenshot();
            resolve(result);
          }
        });
      });
    } catch (error) {
      logger.error(error);
    }
  }
  async function updateScreenshot() {
    if (componentRef.current) {
      const url = await domToImage.toPng(componentRef.current);
      setScreenshot(url);
    }
  }
  async function setRandomFont() {
    const font = Fonts[Math.floor(Math.random() * Fonts.length)];
    setSelectedFont(font);
    await renderAscii(font as figlet.Fonts, text);
  }
  return (
    <section>
      <h1> ASCII Title Generator</h1>
      <section>
        {/* Text Colour Selection */}
        <ul className="nav nav-pills">
          <li className="dropdown">
            <a
              className="dropdown-toggle"
              tabIndex={-1}
              data-toggle="dropdown"
              style={{ color: selectedTextColor }}
              href="#s"
            >
              {selectedTextColor ? `text: ${selectedTextColor}` : 'Text colour'}
            </a>
            <ul className="dropdown-menu" tabIndex={-1}>
              {Colors.map((color, index) => (
                <li className="active" key={`${index}-${color}-text`}>
                  {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                  <a
                    href={color}
                    tabIndex={-1}
                    data-toggle="tab"
                    style={{ color: color }}
                    onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                      const option = event.currentTarget.getAttribute('href');
                      if (option) {
                        setSelectedTextColor(option);
                        render();
                      }
                    }}
                  >
                    {color}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        {/* Background Colour Selection */}
        <ul className="nav nav-pills">
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" style={{ color: selectedBackgroundColor }} href="#s">
              {selectedBackgroundColor ? `background: ${selectedBackgroundColor}` : 'Background colour'}
            </a>
            <ul className="dropdown-menu">
              {Colors.map((color, index) => (
                <li className="active" key={`${index}-${color}-text`}>
                  {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                  <a
                    href={color}
                    data-toggle="tab"
                    style={{ color: color }}
                    onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                      const colorValue = event.currentTarget.getAttribute('href');
                      if (colorValue) {
                        setSelectedBackgroundColor(colorValue);
                        render();
                      }
                    }}
                  >
                    {color}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        {/* Fonts */}
        <ul className="nav nav-pills">
          <li>
            <button type="button" className="btn btn-primary" onClick={setRandomFont}>
              Random Font
            </button>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#s">
              {selectedFont ? `font: ${selectedFont}` : 'Font'}
            </a>
            <ul className="dropdown-menu" style={{ maxHeight: '15em', overflow: 'scroll' }}>
              {Fonts.map((font, index) => (
                <li className="active" key={`${index}-${font}-text`}>
                  {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                  <a
                    href={font}
                    data-toggle="tab"
                    style={{ color: 'black' }}
                    onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                      const option = event.currentTarget.getAttribute('href');
                      if (option) {
                        setSelectedFont(option);
                        render();
                      }
                    }}
                  >
                    {font}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <textarea
          placeholder="Type here"
          onChange={async (e: ChangeEvent<HTMLTextAreaElement>) => {
            setText(e.target.value);
            await render(e.target.value);
          }}
        />
      </section>

      <section>
        {asciiText && (
          <section>
            <span> Ascii Text </span>
            <pre
              ref={componentRef}
              style={{
                lineHeight: 0.9,
                backgroundColor: selectedBackgroundColor,
                color: selectedTextColor
              }}
            >
              {asciiText}
            </pre>
          </section>
        )}

        {screenshot && (
          <section>
            <span> Image </span>
            <img src={screenshot} alt="Screenshot" />
          </section>
        )}
      </section>
    </section>
  );
}
