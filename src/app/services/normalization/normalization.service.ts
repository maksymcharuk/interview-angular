import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, toArray } from 'rxjs/operators';

interface StrapiEntry {
  id: number;
  attributes: any;
}
interface StrapiSingleEntryData {
  data: StrapiEntry;
}
interface StrapiMultiEntryData {
  data: StrapiEntry[];
}

@Injectable({
  providedIn: 'root',
})
export class NormalizationService {
  constructor() {}

  restructureAttributes(
    nestedAttribute?: string
  ): (source$: Observable<StrapiSingleEntryData>) => Observable<any> {
    return (source$) =>
      source$.pipe(
        map((v) => this.restructureNestedAttributes(v.data, nestedAttribute))
      );
  }

  restructureArrayedAttributes(
    nestedAttribute?: string
  ): (source$: Observable<StrapiMultiEntryData>) => Observable<any> {
    return (source$) =>
      source$.pipe(
        map((v) => v.data),
        switchMap((v) => v),
        map((v) => this.restructureNestedAttributes(v, nestedAttribute)),
        toArray()
      );
  }

  private restructureNestedAttributes(
    v: StrapiEntry,
    nestedAttribute?: string
  ) {
    if (nestedAttribute) {
      v.attributes[nestedAttribute] = v.attributes[nestedAttribute].data.map(
        (nv: StrapiEntry) => ({ id: nv.id, ...nv.attributes })
      );
    }
    return { id: v.id, ...v.attributes };
  }
}
