import FilterButton from '../components/FilterButton';
import { UprightBassFilters } from '../FilterInterfaces';


export default function Upright() {
    return (
        <div className="flex flex-row align-top gap-40">
            <div className="text-left">
                <div className="text-3xl font-bold">Filters:</div>
                location
                <FilterButton filterToToggle="plywood">ply</FilterButton>
                <FilterButton >carved</FilterButton>
                <FilterButton >hybrid</FilterButton>
            </div>

            <div>
                <div>Your matches:</div>
                <div>

                </div>
            </div>
        </div>
    );
}