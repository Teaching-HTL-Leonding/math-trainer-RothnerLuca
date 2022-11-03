import { ConfigurationService } from './configuration.service';

describe('Configuration Service', () => {
  const config = new ConfigurationService();
  it('can generate valid numbers', () => {

    let exercise = config.generateExercises();
    expect(exercise[0].numA).toBeGreaterThanOrEqual(0);
    expect(exercise[0].numA).toBeLessThan(10);
  });

  it('generates exercises without remainders in results', () => {
    config.operators.add = config.operators.mult = config.operators.sub = false;

    let exercise = config.generateExercises();
    expect(exercise[0].numA % exercise[0].numB).toBe(0);
    expect(exercise[0].numA).toBeLessThan(10);
  });
});
