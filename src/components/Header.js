import React, { useState, useContext } from 'react';

import ScreenContext from '../context/ScreenContext'

import { Menu, Drawer, Input, Icon } from 'antd'

import Button from './Button'

const { SubMenu } = Menu;

export default (props) => {
    const screenSize = useContext(ScreenContext)
    const [quoteOpen, setQuoteOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState(null)

    const about = document.getElementById('about-page')
    const testimonials = document.getElementById('testimonials-page')
    const contact = document.getElementById('contact-page')

    window.onscroll = () => {
        if(about && testimonials && contact){
            if((about.getBoundingClientRect().top <= window.innerHeight * 0.6) && !(testimonials.getBoundingClientRect().top <= window.innerHeight * 0.6)){
                setActive(['About'])
            } else if((testimonials.getBoundingClientRect().top <= window.innerHeight * 0.6) && !(contact.getBoundingClientRect().top <= window.innerHeight * 0.6)) {
                setActive(['Testimonials'])
            } else if(contact.getBoundingClientRect().top <= window.innerHeight * 0.6) {
                setActive(['Contact'])
            } else {
                setActive(null)
            }
        }
    }

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: screenSize.small ? '5px 25px' : '0px 50px',
                    justifyContent: 'space-between',
                    position: 'fixed',
                    backgroundColor: 'white',
                    width: '100vw',
                    zIndex: '999'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <h1
                        style={{
                            margin: '0 20px 0 0',
                            color: '#054A91',
                            fontSize: screenSize.small ? '1.5em' : '2em'
                        }}
                    >
                        Advanced Energy Electric
                    </h1>
                    {!screenSize.large && 
                        <Menu
                            mode="horizontal"
                            selectedKeys={active}
                        >
                            <Menu.Item 
                                key="About"
                                onClick={() => {
                                    window.scrollBy({
                                        top: about.getBoundingClientRect().top - 20,
                                        left: 0,
                                        behavior: 'smooth'
                                    });
                                }}
                            >
                                About
                            </Menu.Item>
                            <Menu.Item 
                                key="Testimonials"
                                onClick={() => {
                                    window.scrollBy({
                                        top: testimonials.getBoundingClientRect().top - window.innerHeight * 0.3,
                                        left: 0,
                                        behavior: 'smooth'
                                    });
                                }}
                            >
                                Testimonials
                            </Menu.Item>
                            <Menu.Item 
                                key="Contact"
                                onClick={() => {
                                    window.scrollBy({
                                        top: contact.getBoundingClientRect().top,
                                        left: 0,
                                        behavior: 'smooth'
                                    });
                                }}
                            >
                                Contact
                            </Menu.Item>
                            <SubMenu
                                title="Services"
                            >
                                <Menu.Item
                                    key="Thing 1"
                                >
                                    Thing One
                                </Menu.Item>
                                <Menu.Item
                                    key="Thing 2"
                                >
                                    Thing Two
                                </Menu.Item>
                                <Menu.Item
                                    key="Thing 3"
                                >
                                    Thing Three
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    }
                </div>
                
                {!screenSize.large && 
                    <Button
                        type="primary"
                        content='Request a Quote'
                        style={{
                            borderRadius: '0',
                            fontSize: '1.35em',
                            height: '48px'
                        }}
                        onClick={() => { setQuoteOpen(true) }}
                    />
                }

                {screenSize.large && 
                    <Button 
                        type='link'
                        content={<Icon type="menu" />}
                        style={{
                            fontSize: '1.5em'
                        }}
                        onClick={() => {
                            setMenuOpen(true)
                        }}
                    />
                }
            </div>
            {screenSize.large &&
                <div
                    style={{
                        width: '100vw',
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'fixed',
                        bottom: '30px',
                        zIndex: '999'
                    }}
                >
                    <Button 
                        content="Request a quote"
                        type='primary'
                        style={{
                            width: '80vw',
                            fontSize: '1.75em',
                            height: '50px',
                            border: '1px solid white',
                        }}
                        onClick={() => { setQuoteOpen(true) }}
                    />
                </div>
            }
            <Drawer
                title="Request a Quote"
                onClose={() => { setQuoteOpen(false) }}
                width={screenSize.small ? 350 : 500}
                visible={quoteOpen}
                closable={false}
            >
                <form>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: '20px'
                        }}
                    >
                        <div
                            style={{
                                flex: 1,
                                marginRight: '20px'
                            }}
                        >
                            <h3
                                style={{
                                    marginBottom: '3px'
                                }}
                            >
                                First Name
                            </h3>
                            <Input 
                                style={{
                                    width: '100%'
                                }}
                            />
                        </div>
                        <div
                            style={{
                                flex: 1
                            }}
                        >
                            <h3
                                style={{
                                    marginBottom: '3px'
                                }}
                            >
                                Last Name
                            </h3>
                            <Input 
                                style={{
                                    width: '100%'
                                }}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            marginBottom: '20px'
                        }}
                    >
                        <h3
                            style={{
                                marginBottom: '3px'
                            }}
                        >
                            Email
                        </h3>
                        <Input 
                            style={{
                                width: '100%'
                            }}
                        />
                    </div>
                    <div
                        style={{
                            marginBottom: '20px'
                        }}
                    >
                        <h3
                            style={{
                                marginBottom: '3px'
                            }}
                        >
                            Phone
                        </h3>
                        <Input 
                            style={{
                                width: '100%'
                            }}
                        />
                    </div>
                    <div
                        style={{
                            marginBottom: '20px'
                        }}
                    >
                        <h3
                            style={{
                                marginBottom: '3px'
                            }}
                        >
                            Comments
                        </h3>
                        <Input.TextArea

                            autosize={{maxRows: 10, minRows: 5}}
                            style={{
                                width: '100%'
                            }}
                        />
                    </div>
                </form>
                <div
                    style={{
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        width: '100%',
                        borderTop: '1px solid #e9e9e9',
                        padding: '16px',
                        textAlign: 'right',
                    }}
                >
                    <Button 
                        content="Cancel"
                        style={{ 
                            fontSize: '1.25em',
                            height: '40px',
                            marginRight: 8 
                        }}
                        onClick={() => { setQuoteOpen(false) }}
                    />
                    <Button 
                        content="Request Quote"
                        type="primary"
                        style={{ 
                            fontSize: '1.25em',
                            height: '40px',
                            marginRight: 8 
                        }}
                    />
                </div>
            </Drawer>
            <Drawer
                onClose={() => { setMenuOpen(false) }}
                visible={menuOpen}
                closable={false}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Button 
                        type='link'
                        content='About'
                        onClick={() => {
                            window.scrollBy({
                                top: about.getBoundingClientRect().top - 20,
                                left: 0,
                                behavior: 'smooth'
                            });
                            setMenuOpen(false)
                        }}
                        style={{
                            fontSize: '2em',
                            margin: '5px 0'
                        }}
                    />
                    <Button 
                        type='link'
                        content='Testimonials'
                        onClick={() => {
                            window.scrollBy({
                                top: testimonials.getBoundingClientRect().top - window.innerHeight * 0.3,
                                left: 0,
                                behavior: 'smooth'
                            });
                            setMenuOpen(false)
                        }}
                        style={{
                            fontSize: '2em',
                            margin: '5px 0'
                        }}
                    />
                    <Button 
                        type='link'
                        content='Contact'
                        onClick={() => {
                            window.scrollBy({
                                top: contact.getBoundingClientRect().top,
                                left: 0,
                                behavior: 'smooth'
                            });
                            setMenuOpen(false)
                        }}
                        style={{
                            fontSize: '2em',
                            margin: '5px 0'
                        }}
                    />
                </div>
            </Drawer>
        </>
    );
}