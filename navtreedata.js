/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "score", "index.html", [
    [ "Coding Style", "_coding_style.html", [
      [ "General philosophy", "_coding_style.html#Philosophy", null ],
      [ "Qt versus Modern C++", "_coding_style.html#Qt", null ],
      [ "Inheritance", "_coding_style.html#Inheritance", null ],
      [ "Passing values", "_coding_style.html#Values", null ],
      [ "Templates", "_coding_style.html#Templates", null ]
    ] ],
    [ "Commands", "_commands.html", [
      [ "Creating a command", "_commands.html#CreatingCommand", null ],
      [ "Launching commands", "_commands.html#LaunchingCommands", null ],
      [ "Special commands", "_commands.html#SpecialCommands", [
        [ "Command dispatchers", "_commands.html#Dispatchers", null ]
      ] ]
    ] ],
    [ "Contexts", "_contexts.html", null ],
    [ "Graphics plug-ins", "_gfx_plugins.html", [
      [ "Creating a custom node", "_gfx_plugins.html#CustomNode", null ],
      [ "Shader conventions", "_gfx_plugins.html#ShaderConventions", null ],
      [ "Video decoders", "_gfx_plugins.html#VideoDecoders", null ]
    ] ],
    [ "Data models", "_models.html", [
      [ "Organization", "_models.html#Organization", null ],
      [ "Identification of objects", "_models.html#IdentificationObjects", [
        [ "Identifiers", "_models.html#Identifiers", null ],
        [ "Paths", "_models.html#Paths", null ]
      ] ],
      [ "Creating models", "_models.html#CreatingModels", null ],
      [ "Relationship to Qt's item models", "_models.html#ItemModel", null ],
      [ "Tree models for simple objects", "_models.html#SimpleObjectsModel", null ]
    ] ],
    [ "Model-View-Presenter separation", "_model_view_presenter.html", null ],
    [ "Plug-ins, factories and interfaces", "_plugins_factories_and_interfaces.html", [
      [ "Anatomy of a plug-in", "_plugins_factories_and_interfaces.html#Anatomy", null ],
      [ "Adding a new component", "_plugins_factories_and_interfaces.html#NewClass", null ],
      [ "Declaring a new interface", "_plugins_factories_and_interfaces.html#NewInterface", null ],
      [ "Add-on manager", "_plugins_factories_and_interfaces.html#AddonManager", null ]
    ] ],
    [ "Useful score interfaces", "_score_interfaces.html", null ],
    [ "Serialization", "_serialization.html", [
      [ "Generalities on serialization", "_serialization.html#GenSer", null ],
      [ "DataStream serialization", "_serialization.html#DataStreamSer", null ],
      [ "JSON serialization", "_serialization.html#JSONObjSer", [
        [ "For deserializing", "_serialization.html#ObjDeser", [
          [ "In DataStream", "_serialization.html#DSObjDeser", null ],
          [ "In JSON", "_serialization.html#JSObjDeser", null ]
        ] ],
        [ "Serialization of polymorphic types", "_serialization.html#PolySer", null ],
        [ "Serialization examples", "_serialization.html#SerExamples", null ]
      ] ]
    ] ],
    [ "State Machines", "_state_machines.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
".html",
"_clear_interval_8hpp_source.html",
"_factory_family___qt_interface_8hpp_source.html",
"_minuit_device_8hpp_source.html",
"_scenario_actions_8hpp_source.html",
"_variant_serialization_8hpp_source.html",
"class_automation_1_1_process_state.html#ad20a53e5113aa683d5f42b1be9e31a17",
"class_curve_1_1_edition_settings.html#a16aaf4ee20b7eb6de78e364c775fe4a7",
"class_curve_1_1_settings_1_1_view.html#a9377870582ff235958cf40b87b9f7629",
"class_data_stream_writer.html#a1fa8a02ca5a0269e0a5cd4baee80cfef",
"class_dataflow_1_1_port_item.html#a3b22c3dee682aeaa0a3051fae031c86b",
"class_execution_1_1_clock.html#a2b18b30f289e9a23b0f112f314790213",
"class_execution_1_1_state_component_base.html#a5e893dcec3666158222f14faf7653ede",
"class_explorer_1_1_device_explorer_filter_proxy_model.html",
"class_faust_d_s_p_1_1_executor_1_1exec__node.html",
"class_gfx_1_1_video_1_1_process_executor_component.html",
"class_identified_object.html#a00a1eeee55ff8c33973af3ccc3d214b9",
"class_j_s_o_n_reader.html#a3d23c52535fc088b411e5d1de2e485cf",
"class_j_s_o_n_writer.html#acb741c3c7c52c5bf042104c9560df783",
"class_mapping_1_1_inspector_widget.html#ae46e40e0b81deac4ae73f9d253adda3e",
"class_metronome_1_1_process_model.html#acb96daf1117dad561c90971378f0b05c",
"class_nodal_1_1_model.html#a5eb1d01cc273cb8c99659a8cf684e210",
"class_pd_1_1_process_model.html#a03c16fd7fee082f1e6d6fa0f727b2852",
"class_process_1_1_footer_delegate.html#a173e4338e6be89b47a95c06886758b2d",
"class_process_1_1_port.html#a383dd0c2a5619fbdf4713d4767c3efbe",
"class_protocols_1_1_fixture_data.html#aafcffec2c9d02b49a488ae1df8ad0ee6",
"class_recording_1_1_automation_recorder.html#ab48aff3bec2173100258d750893159a6",
"class_scenario_1_1_command_1_1_add_trigger.html",
"class_scenario_1_1_command_1_1_move_event_meta.html",
"class_scenario_1_1_control_item_model.html",
"class_scenario_1_1_event_summary_widget.html#abae8bd47f692ddf99408be42df93b411",
"class_scenario_1_1_interval_model.html#a84e5b7ad5a406d83bfeb6b8369b090f2",
"class_scenario_1_1_line_text_item.html#ac996f30695360681f2ae27289cee21c0",
"class_scenario_1_1_process_model.html#a8a3a9bd967db0c17077e30d9e81245c2",
"class_scenario_1_1_scenario_temporal_layer_factory.html#addaa604f6110c478f99afd7d095b9255",
"class_scenario_1_1_state_view.html#aeeb3bcd8648acd3a784ce38abfcdcd31",
"class_scenario_1_1_transition___t_3_01_scenario___t_00_01_move_on_time_sync_01_4.html",
"class_spline_1_1_view.html",
"class_tree_node.html#a6241bcd8b52829cca5d18ac9978bfb18",
"class_zeroconf_browser.html",
"classscore_1_1_command_stack.html#af54c038ee6a21de935913523488853b3",
"classscore_1_1_file_downloader.html#a26132950312a4c17c2ed9732035bac44",
"classscore_1_1_minimal_application.html",
"classscore_1_1_q_graphics_multi_slider.html#a0ea6f38feb159f6339069f413fe848f0",
"classscore_1_1_skin.html#a5663b052b3309193752e913e4160ca8b",
"classscore_1_1gfx_1_1_generic_node_renderer.html#a4542fdece0191686165f8c0bcc3abd35",
"classscore__plugin__vst.html#a46140048d4b474baec1a7ea8382a0dff",
"classvst_1_1_model.html#afa447e4d7989990e49645f3e4bff6dce",
"score-plugin-js_2_j_s_2_commands_2_edit_script_8hpp_source.html",
"struct_control_1_1_float_control.html#a592a126352d4588c7e226137414a193b",
"struct_curve_1_1_style_interface.html#a00f663696c05a7e00b19103ccf1fdd3e",
"struct_execution_1_1_settings_1_1_ordering_policies.html",
"struct_gfx_1_1control__updater.html",
"struct_l_v2_1_1_host_context.html#a3afd33d679e209a93b2e809539f16a82",
"struct_media_1_1_sound_1_1_waveform_computer_impl.html#aae73ae8d4333064505686e3429e560e8",
"struct_nodes_1_1_factor_oracle_1_1_node_1_1_state.html#af316491af51facd144e207ff95a4cac0",
"struct_process_1_1_context.html#a406b0e32dda131c34a49e09814789b3c",
"struct_process_1_1_style.html#ada76c8cce956bf4d86ea9c16b0b66edd",
"struct_q_meta_type_id_3_01_state_1_1_address_accessor_01_4.html",
"struct_scenario_1_1_categorized_address.html#a1964793c8c7ab87042c9224e6c749502",
"struct_scenario_1_1_slot.html#afb3cbe5bf847e941f34728104b135c03",
"struct_state_1_1_unit_model_1_1_unit_data_model.html#a7c53dada416e26dd1911596d8a578f8d",
"struct_variant_j_s_o_n_deserializer.html",
"structscore_1_1_brush_set.html#a867ac207ac0a5913a7018d585ed752a1",
"structscore_1_1_positioned_event.html#a8d1201ac3867413962297352c840cb2d",
"structscore_1_1_value_double_slider.html#a6f75ee33ecc8802b16735b3fa9f3254e",
"structscore_1_1gfx_1_1_text_node.html#a445a822e38cfa98f6411637d70138860",
"structvst3_1_1_bus_activation_visitor.html#af3376bc576ca6c74db318b000f495636"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';