import { Component, OnInit, ElementRef } from '@angular/core';
import { Network, Node, Edge } from 'vis';

interface LabeledEdge extends Edge {
    label: string;
}

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  constructor(private myElement: ElementRef) { }

    ngOnInit() {
      const htmlElem = this.myElement.nativeElement as HTMLElement;
      const myNodes: Node[] = [];
      const myEdges: LabeledEdge[] = [];

      myNodes.push({'id': '1', 'label': '1'});
      myNodes.push({'id': '2', 'label': '2'});
      myNodes.push({'id': '3', 'label': '3'});

      myEdges.push({'from': '1', 'to': '2', 'label' : 'link'});

      const data = { nodes : myNodes, edges: myEdges };

      const graph = new Network
        (htmlElem.firstChild as HTMLElement, data, {'manipulation' : { enabled: true } });

      graph.addEdgeMode();
    }
}
