import { Resource as Model } from 'model';
import React from 'react';

export class Resources extends React.Component<
  { resources: Model[] },
  { resources: Model[]; items: Model[]; selectedItem?: Model }
> {
  constructor(props: { resources: Model[] }) {
    super(props);
    this.state = {
      items: props.resources,
      resources: props.resources,
      selectedItem: props.resources[0]
    };
  }

  itemSelected(idx: number): void {
    this.setState({
      selectedItem: this.state.items[idx]
    });
  }

  onTextChange(text: string | null): void {
    this.setState({ selectedItem: undefined });
    if (text === null) {
      this.setState({
        items: this.props.resources
      });
    } else {
      const filtered = this.props.resources.filter(function ({ title, tags, description }) {
        return (
          title.toLowerCase().includes(text.toLowerCase()) ||
          tags.join(',').toLowerCase().includes(text.toLowerCase()) ||
          description.toLowerCase().includes(text.toLowerCase())
        );
      });
      this.setState({
        items: filtered
      });
    }
  }

  render(): JSX.Element {
    return (
      <section className="kimchi-box kimchi-page" style={{ height: '90%' }}>
        <div>
          <span>Search:</span>
          <input type="text" className="form-control" onChange={(e) => this.onTextChange(e.target.value)} />
        </div>
        <br />
        <section style={{ display: 'flex', height: '100%' }}>
          <div className="kimchi-list" style={{ width: '50%', height: '90%' }}>
            {this.state.items.map((item, idx) => (
              <div key={idx} onClick={(e) => this.itemSelected(idx)} id="">
                <p className="kimchi-purple-mark">{item.title}</p>
                <p>[{item?.tags.join(', ')}]</p>
              </div>
            ))}
          </div>
          <div className="kimchi-list" style={{ width: '50%', padding: 5 }}>
            {this.state.selectedItem != null ? (
              <div>
                <p>
                  <a href={this.state.selectedItem?.url}>link</a>
                </p>
                <p>{this.state.selectedItem?.description}</p>
              </div>
            ) : (
              <div />
            )}
          </div>
        </section>
      </section>
    );
  }
}
