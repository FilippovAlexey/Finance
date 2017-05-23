import { ReportSheetRowViewModel } from './reportSheetRowViewModel';
import { ComponentChartViewModel} from './componentChartViewModel'

export class ReportSheetViewModel {
    titles: Array<string>;
    rows: Array<ReportSheetRowViewModel>;
    total: Array<string>;
    componentChart: ComponentChartViewModel;
}
