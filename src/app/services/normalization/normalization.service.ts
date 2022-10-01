import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, toArray } from 'rxjs/operators';

interface StrapiEntry {
  id: number;
  attributes: any;
}
interface StrapiComponentEntry {
  id: number;
}
interface StrapiSingleEntryData {
  data: StrapiEntry | StrapiComponentEntry;
}
interface StrapiMultiEntryData {
  data: StrapiEntry[] | StrapiComponentEntry[];
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
    v: StrapiEntry | StrapiComponentEntry,
    nestedAttribute?: string
  ) {
    if (nestedAttribute && 'attributes' in v) {
      v.attributes[nestedAttribute] = v.attributes[nestedAttribute].data.map(
        (nv: StrapiEntry) => ({ id: nv.id, ...nv.attributes })
      );
    }

    return 'attributes' in v ? { id: v.id, ...v.attributes } : v;
  }
}
