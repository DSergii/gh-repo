import { TestBed } from '@angular/core/testing';

import { RepoSearchService } from './repo-search.service';

describe('RepoSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepoSearchService = TestBed.get(RepoSearchService);
    expect(service).toBeTruthy();
  });
});
