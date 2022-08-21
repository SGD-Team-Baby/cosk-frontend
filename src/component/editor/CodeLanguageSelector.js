import React, {useState} from "react";
import {refractor} from 'refractor'
import {Dropdown, Form} from "react-bootstrap";

export default function CodeLanguageSelector({selectedLanguage, onLanguageSelect}) {
    const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
        <span
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            <span className="material-symbols-outlined align-text-bottom" style={{fontSize: "110%"}}>expand_more</span>
        </span>
    ));

    const CustomMenu = React.forwardRef(
        ({children, style, className, 'aria-labelledby': labeledBy}, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <Form.Control
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Type to filter..."
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                    </ul>
                </div>
            );
        },
    );

    return (
        <div>
            <Dropdown>
                <div className="mx-2 mt-1 px-2 py-1">
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        {selectedLanguage || "plain"} &nbsp;
                    </Dropdown.Toggle>
                </div>

                <Dropdown.Menu as={CustomMenu} style={{overflowY: "auto", maxHeight: "60vh"}}>
                    {
                        refractor.listLanguages().map((language, index) => {
                            return <Dropdown.Item eventKey={(index + 1).toString()}
                                                  active={selectedLanguage === language}
                                                  onClick={() => onLanguageSelect(language)}>{language}</Dropdown.Item>
                        })
                    }

                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}