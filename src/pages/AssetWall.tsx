import React from 'react';
import Profile from 'assets/head_spin_yellow_bg.gif';

export class AssetWall extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <img src={Profile} width="100" alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(90deg)' }} alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(180deg)' }} alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(270deg)' }} alt="Moving head" />

        <img src={Profile} width="100" alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(90deg)' }} alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(180deg)' }} alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(270deg)' }} alt="Moving head" />

        <img src={Profile} width="100" alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(90deg)' }} alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(180deg)' }} alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(270deg)' }} alt="Moving head" />

        <img src={Profile} width="100" alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(90deg)' }} alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(180deg)' }} alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(270deg)' }} alt="Moving head" />

        <img src={Profile} width="100" alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(90deg)' }} alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(180deg)' }} alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(270deg)' }} alt="Moving head" />

        <img src={Profile} width="100" alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(90deg)' }} alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(180deg)' }} alt="Moving head" />
        <img src={Profile} width="100" style={{ transform: 'rotate(270deg)' }} alt="Moving head" />
      </div>
    );
  }
}
