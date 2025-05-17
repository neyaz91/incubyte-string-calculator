export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const match = numbers.match(/^\/\/(.*)\n/);
      if (match) {
        const delimSpec = match[1];
        numbers = numbers.slice(match[0].length);

        const delims = delimSpec.match(/\[(.+?)\]/g);
        if (delims) {
          const escaped = delims.map(d => d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
          delimiter = new RegExp(escaped.join("|"));
        } else {
          delimiter = new RegExp(delimSpec.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
        }
      }
    }

    const nums = numbers.split(delimiter).map(Number);
    const negatives = nums.filter(n => n < 0);
    if (negatives.length) throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    return nums.filter(n => n <= 1000).reduce((sum, n) => sum + n, 0);
  }
}